#version 330 

in vec4 f_color;
in vec2 f_uv;
in float f_time;

out vec4 fragColor;

uniform sampler2D texture_map;

//for texture mapping
varying vec3 TexCoord0;

void main(void)
{
	// Retrieve texture value
    vec4 color1 = texture(texture_map, f_uv);

	// Use texture in determining fragment colour
	gl_FragColor = color1;
	
}
