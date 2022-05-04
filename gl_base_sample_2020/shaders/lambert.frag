//fragment
#version 330 core
in vec3 vFragPosition;
in vec2 vTexCoords;
in vec3 vNormal;
in vec4 myColor;


out vec4 outColor;
uniform vec3 camPos;


uniform vec3 asd;

void main()
{
vec3 lightDir1 = vec3(1.0f, 1.0f, 1.0f);
vec3 lightDir2 = vec3(-1.0f, 0.0f, 1.0f);
vec3 lightDir3 = vec3(0.0f, 1.0f, 1.0f);
vec3 lightColor1 = vec3(0.64f, 1.0f, 1.0f);
vec3 lightColor2 = vec3(1.0f, 0.56f, 0.001f);
vec3 lightColor3 = vec3(1.0f, 1.0f, 1.0f);
vec3 base_color = vec3(0.8f, 0.1f, 0.3f);
vec4 color1 = vec4(abs(dot(vNormal, lightDir1)) * lightColor1,
1.0f);
vec4 color2 = vec4(abs(dot(vNormal, lightDir2)) * lightColor2,
1.0f);
vec4 color3 = vec4(abs(dot(vNormal, lightDir3)) * lightColor3,
1.0f);
vec4 color_l = 0.45f * color1 + 0.45f * color2 + 0.1f * color3;

outColor = myColor*color1;



}