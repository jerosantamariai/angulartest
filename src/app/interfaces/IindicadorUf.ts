export interface IindicadorUf {
    autor: string;
    codigo: string;
    nombre: string;
    unidad_medida: string;
    serie:  {
        fecha: string;
        valor: number;
    } [];
}
