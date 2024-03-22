"use client";

import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import ForceGraph3D, { GraphData } from "react-force-graph-3d";
import d3Data from "../../../../../datasets/data.json";
import SpriteText from "three-spritetext";

interface Node {
  x: number;
  y: number;
  id: string;
  group: number;
  url: string;
  fx: number;
  fy: number;
  fz: number;
}

interface Link {
  source: string;
  target: string;
  value: number;
}

function WorksGraph() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="h-screen border border-neutral border-dotted hover:border-solid">
      <div
        ref={containerRef}
        className="h-full overflow-hidden hover:brightness-110 dark:invert transition ease-in-out duration-1000"
      >
        <ForceGraph3D
          graphData={d3Data as unknown as GraphData<Node, Link>}
          width={dimensions.width}
          height={dimensions.height}
          nodeLabel={(node) => `  <div>
        <span class="graphTooltip">${node.id}</span>
        ${node.cover ? `<img src="${node.cover}" alt="Project Cover" width="150" height="100" class="imgTooltip" >` : ""}
        </div>`}
          backgroundColor="#dddddd"
          linkColor={() => "#000000"}
          onNodeDragEnd={(node) => {
            node.fx = node.x;
            node.fy = node.y;
            node.fz = node.z;
          }}
          nodeThreeObject={(node: { id: string }) => {
            // Create geometry
            const geometry = new THREE.BoxGeometry(3, 3, 3);

            // Create material
            const material = new THREE.MeshBasicMaterial({
              color: "#888888",
              wireframe: true,
            });

            // Create mesh
            const mesh = new THREE.Mesh(geometry, material);

            // Create sprite
            const sprite = new SpriteText(node.id);
            sprite.fontFace = "Pixel";
            sprite.color = "blue";
            sprite.textHeight = 2;
            sprite.position.y = -3;

            // Create a group and add both mesh and sprite to it
            const group = new THREE.Group();
            group.add(mesh);
            group.add(sprite);

            return group;
          }}
          onNodeClick={(node) => {
            window.location.href = node.url;
          }}
        />
      </div>
    </div>
  );
}

export default WorksGraph;
