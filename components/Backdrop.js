import { useEffect, useRef } from 'react';
import * as twgl from 'twgl.js';
import styles from './Backdrop.module.css';

export default function Backdrop() {
  let cRef = useRef();
  useEffect(() => {
    const canvas = cRef.current;
    const gl = canvas.getContext('webgl');
    const programInfo = twgl.createProgramInfo(gl, ['vs', 'fs']);

    const arrays = {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
    };
    const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

    function render(time) {
      twgl.resizeCanvasToDisplaySize(gl.canvas);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      const uniforms = {
        u_resolution: [gl.canvas.width, gl.canvas.height],
        u_time: time * 0.001,
      };

      gl.useProgram(programInfo.program);
      twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
      twgl.setUniforms(programInfo, uniforms);
      twgl.drawBufferInfo(gl, bufferInfo);

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
  return (
    <>
      <canvas className={styles.canv} ref={cRef}></canvas>
      <script id="vs" type="notjs">
        {`
attribute vec4 position;

void main() {
  gl_Position = position;
}`}
      </script>
      <script id="fs" type="notjs">
        {`
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 colA = vec3(0.080,0.080,0.080);
    vec3 colB = vec3(0.155,0.155,0.155);

    float val = cos(fract(100.0*st.x)+u_time)*cos(1000.0*st.y+u_time);
    vec3 color = mix(colA,colB,val);

    gl_FragColor = vec4(color,1.0);
}`}
      </script>
    </>
  );
}
