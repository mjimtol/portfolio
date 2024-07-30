export type DatosTarjetas = {
    titulo: string
    texto: string
    imagen: string | ImageMetadata
    color: string
    fecha: string
}

export type DatosProyectos = {
    titulo: string
    texto: string
    imagen: string | ImageMetadata
    bgColor: string
    url: string
    tags: string[]
    active: boolean
    newTab: boolean,
}
