const key_static = "0x8ABA5529E6888EE1858C4489D742BC51678AD385";

export async function getKey() {
    const resp = await fetch("/fingerprint.txt");
    const key  = await resp.text();
    return key.length === 42 ? key : key_static;
}

export const keyPath = "public.asc";