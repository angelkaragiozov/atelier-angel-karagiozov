"use client"

import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import ForceGraph3D, {GraphData}from "react-force-graph-3d"
import d3Data from "../../datasets/miserables.json"
import SpriteText from 'three-spritetext';




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
                height: containerRef.current.offsetHeight
              });
            }
          }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  return (
    <div className="h-screen border border-gray border-dashed hover:border-solid dark:border-dark">
        
    <div ref={containerRef} className='h-full overflow-hidden hover:brightness-105 dark:invert transition-all ease-in-out duration-1000' >

      
      <ForceGraph3D 
        graphData={d3Data as GraphData<Node, Link>}
        width={dimensions.width}
        height={dimensions.height} 
        nodeLabel={node => `<span class="graphTooltip text-black">${node.id}</span>`}
        backgroundColor="#f2f2f2"
        linkColor={() => "black"}
        onNodeDragEnd={node => {
          node.fx = node.x;
          node.fy = node.y;
          node.fz = node.z;
        }}

        nodeThreeObject={(node: { id: string; }) => {
              // Create geometry
        const geometry = new THREE.BoxGeometry(3, 3, 3);
        
        // Create material
        const material = new THREE.MeshBasicMaterial({ color: '#cccccc', wireframe:true});
       
        
        // Create mesh
        const mesh = new THREE.Mesh(geometry, material);
    

        // Create sprite
        const sprite = new SpriteText(node.id);
        sprite.fontFace = 'Pixel';
        sprite.color = 'blue';
        sprite.textHeight = 3;
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


           <div className='text-2xs text-center text-neutral -mt-[7px] p-2 border-gray border-dashed dark:text-dark '>
            <p> Nodes-&gt; click:visit project, click+hold:positioning | Navigation-&gt; click:rotate, mouse-wheel/middle-click:zoom, right-click:pan</p>
           </div>


    </div>
    
  )
}


export default WorksGraph