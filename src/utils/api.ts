import type { Content } from "../types";

/**
 * Interfaz para la respuesta de la API
 */
export interface ApiResponse {
  inicio: {
    cierre: Content[];
    inicio: Content[];
    contenido: Content[];
  };
  acerca: {
    introduction: string;
    biography: string;
    phrase: string;
    social: {
      email: string;
      facebook: string;
      tiktok: string;
      twitter: string;
      youtube: string;
    };
  };
}

/**
 * Configuración de la API
 */
const API_CONFIG = {
  baseUrl: "http://localhost:3000",
  endpoints: {
    paginas: "/api/globals/paginas?depth=2&draft=false&locale=undefined",
  },
};

/**
 * Función para consumir la API de páginas
 * @returns {Promise<ApiResponse | null>} Los datos de la API o null si hay error
 */
export async function fetchPaginasData(): Promise<ApiResponse | null> {
  try {
    const response = await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.paginas}`);
    
    if (!response.ok) {
      console.error(`Error en la API: ${response.status} ${response.statusText}`);
      return null;
    }
    
    const data = await response.json();
    return data as ApiResponse;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    return null;
  }
}

/**
 * Función para validar que los datos de la API están completos
 * @param {ApiResponse | null} data - Los datos obtenidos de la API
 * @returns {boolean} true si los datos son válidos, false en caso contrario
 */
export function validarDatos(data: ApiResponse | null): boolean {
  // Verificar que data existe
  if (!data) {
    console.log("No hay datos disponibles");
    return false;
  }

  // Validar sección de cierre
  if (!data?.inicio?.cierre?.length || data.inicio.cierre.length === 0) {
    console.log("Faltan datos en la sección de cierre");
    return false;
  }

  // Validar sección de inicio
  if (!data?.inicio?.inicio?.length || data.inicio.inicio.length === 0) {
    console.log("Faltan datos en la sección de inicio");
    return false;
  }

  // Validar contenido principal
  if (!data?.inicio?.contenido?.length || data.inicio.contenido.length === 0) {
    console.log("Faltan datos en el contenido principal");
    return false;
  }

  // Validar datos sociales y biografía
  const validacionesSociales = [
    data?.acerca?.introduction,
    data?.acerca?.biography,
    data?.acerca?.phrase,
    data?.acerca?.social?.email,
    data?.acerca?.social?.facebook,
    data?.acerca?.social?.tiktok,
    data?.acerca?.social?.twitter,
    data?.acerca?.social?.youtube,
  ];

  const todasLasValidacionesSociales = validacionesSociales.every((valor) => {
    if (!valor) {
      return false;
    }
    return true;
  });

  if (!todasLasValidacionesSociales) {
    console.log("Faltan datos en la información social o biografía");
    return false;
  }

  console.log("Todos los datos son válidos");
  return true;
}

/**
 * Función combinada que obtiene y valida los datos de la API
 * @returns {Promise<{data: ApiResponse | null, isValid: boolean}>}
 */
export async function obtenerYValidarDatos(): Promise<{
  data: ApiResponse | null;
  isValid: boolean;
}> {
  const data = await fetchPaginasData();
  const isValid = validarDatos(data);
  
  return {
    data,
    isValid
  };
}
