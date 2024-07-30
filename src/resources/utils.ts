import { Techs } from "./enums"


export function getTagColor(tech: string) {
    switch (tech) {
        case Techs.REACT:
            return '#5ed3f3'
        case Techs.JS:
            return '#efd81d'
        case Techs.TS:
            return '#2f76c4'
        case Techs.THREE:
            return '#433f81'
        case Techs.ASTRO:
            return '#9333ea'
        default:
            return '#ccc'
    }
}

export function getTagTextColor(tech: string) {
    switch (tech) {
        case Techs.REACT:
        case Techs.JS:
        case Techs.ASTRO:
            return '#000'
        case Techs.THREE:
        case Techs.TS:
            return '#fff'
        default:
            return '#ccc'
    }
}