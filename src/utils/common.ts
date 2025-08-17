import { obtenerYValidarDatos, type ApiResponse } from "./api";

/**
 * Función simplificada para obtener datos de configuración básica
 * Útil para páginas que solo necesitan verificar si el sitio está configurado
 * @returns {Promise<boolean>} true si el sitio está configurado correctamente
 */
export async function verificarConfiguracion(): Promise<boolean> {
  const { isValid } = await obtenerYValidarDatos();
  return isValid;
}

/**
 * Función para obtener datos específicos para páginas que no usan toda la API
 * @returns {Promise<{isConfigured: boolean, data?: ApiResponse}>}
 */
export async function obtenerConfiguracionSitio(): Promise<{
  isConfigured: boolean;
  data?: ApiResponse;
}> {
  const { data, isValid } = await obtenerYValidarDatos();
  
  return {
    isConfigured: isValid,
    data: isValid ? data : undefined
  };
}

/**
 * Configuración por defecto para páginas no configuradas
 */
export const DEFAULT_CONFIG = {
  redirectUrl: "https://admin.caminovaliente.com",
  messages: {
    incomplete: "Configuración incompleta",
    instruction: "Por favor, ve al panel de administración y configura correctamente todos los campos necesarios.",
    buttonText: "Ir al panel de administración"
  }
};
