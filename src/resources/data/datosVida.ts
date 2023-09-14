import type { DatosTarjetas } from './data.types'
import itop from '../images/mivida/itop.png'
import inerza from '../images/mivida/inerza.png'
import tranviaSVG from '../images/mivida/metroT.svg'

import browser from '../images/mivida/browser.svg'
import computer from '../images/mivida/computer.svg'
import mobile from '../images/mivida/mobile.svg'

export const experienciaLab: DatosTarjetas[] = [
    {
        titulo: 'ITOP',
        texto:
            '<h3><b>Desarrollo</b></h3>&nbsp' +
            '<ul>' +
            '<li>Aplicaciones móviles</li>' +
            '<li>Aplicaciones web</li>' +
            '<li>Addons SAP B1</li>' +
            '</ul>' +
            '(2021 - Actualidad)',
        imagen: itop,
        color: '#01c7ff',
        fecha: '2021',
    },
    {
        titulo: 'INERZA',
        texto:
            '<h3><b>Desarrollo</b></h3>&nbsp' +
            '<ul>' +
            '<li>Portales educación Canarias</li>' +
            '<li>SQL, JS, C#</li>' +
            '</ul>' +
            '(2016 - 2020)',
        imagen: inerza,
        color: '#edbe16',
        fecha: '2016',
    },
    {
        titulo: 'METROTENERIFE',
        texto:
            '<h3><b>Desarrollo</b></h3>&nbsp' +
            '<ul>' +
            '<li>App via móvil ios + android</li>' +
            '</ul>' +
            '(6 meses)',
        imagen: tranviaSVG,
        color: '#ba3d3d',
        fecha: '2015',
    },
]

export const estudios: DatosTarjetas[] = [
    {
        titulo: 'MULTIPLATAFORMA',
        texto:
            '<h3><b>Ciclo Superior en Desarrollo de Aplicaciones Multiplataforma</b></h3>&nbsp' +
            '<p>Formación centrada en la programación de software para aplicaciones móviles o de escritorio.</p>',
        imagen: mobile,
        color: '#671fd7',
        fecha: '2015',
    },
    {
        titulo: 'WEB',
        texto:
            '<h3><b>Ciclo Superior en Desarrollo de Aplicaciones Web</b></h3>&nbsp' +
            '<p>Enfocado en el desarrollo, mantenimiento e implantación de aplicaciones informáticas en diferentes entornos web.</p>',
        imagen: browser,
        color: '#0df64d',
        fecha: '2014',
    },
    {
        titulo: 'SISTEMAS',
        texto:
            '<h3><b>Ciclo Superior Administración de Sistemas Informáticos</b></h3>&nbsp' +
            '<p>Configuración, administración y mantenimiento de sistemas informáticos, garantizando la funcionalidad, la integridad de los recursos y servicios del sistema.</p>',
        imagen: computer,
        color: 'white',
        fecha: '2011',
    },
]

// titulo: string
// texto: string
// imagen: string
// color: string
// fecha: string
