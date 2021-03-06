#version 440 core
layout ( location = 0) in vec2 uv;

uniform sampler2D u_texture;

out vec4 FragColor;

void main() {
    FragColor = texture(u_texture, uv);
}