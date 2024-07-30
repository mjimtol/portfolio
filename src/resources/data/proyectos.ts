import three from '../images/proyectos/three.webp'
import magic from '../images/proyectos/MTG.webp'
import teclado from '../images/proyectos/teclado.webp'

import type { DatosProyectos } from './data.types'
import { Techs } from '../enums'

// Imagen 400 x 600 -> 1.5 ratio
export const Proyectos: DatosProyectos[] = [
    {
        titulo: 'Pruebas técnicas',
        texto: 'Pruebas técnicas realizadas por mí con código visible en github',
        imagen: teclado,
        bgColor: '#ff781f',
        url: '/pruebastecnicas/',
        tags: [],
        active: true,
        newTab: false,
    },{
        titulo: 'Three',
        texto: 'Proyecto de inicio con Three.js',
        imagen: three,
        bgColor: '#52b67c',
        url: 'http://three.magecjimenez.es/',
        tags: [Techs.JS, Techs.THREE],
        active: true,
        newTab: true,
    },
    {
        titulo: 'Magic DB',
        texto: 'Proyecto para buscar cartas magic y organizar una base de datos con las que tengo <b>(EN PROCESO)</b>',
        imagen: magic,
        bgColor: '#70a5ae',
        url: 'http://magic.magecjimenez.es/',
        tags: [Techs.TS, Techs.REACT],
        active: false,
        newTab: true,
    },
]
