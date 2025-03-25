import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useScientistsStore } from '@/stores/scientists';
import axiosInstance from '@/api/servicesAPI'; // Importamos la instancia que usa el store
import MockAdapter from 'axios-mock-adapter';

describe('useScientistsStore', () => {
  let mockAxios;
  let store;

  beforeEach(() => {
    // Crea una instancia fresh de Pinia
    setActivePinia(createPinia());
    
    // Crea el mock usando la misma instancia de axios que el store
    mockAxios = new MockAdapter(axiosInstance);
    
    // Crea una instancia del store
    store = useScientistsStore();
  });

  afterEach(() => {
    mockAxios.restore();
    vi.clearAllMocks();
  });

  describe('fetchScientists', () => {
    it('debe cargar científicos correctamente', async () => {
      const mockData = [
        { id: 1, name: 'Marie Curie', area: 1 },
        { id: 2, name: 'Albert Einstein', area: 2 }
      ];
      
      // Configura el mock para la ruta /scientists
      mockAxios.onGet('scientists').reply(200, mockData);
      
      // Llama a la acción del store
      await store.fetchScientists();
      
      // Verifica que los datos se hayan cargado correctamente
      expect(store.scientists).toEqual(mockData);
    });

    it('debe manejar errores al cargar científicos', async () => {
      // Configura el mock para devolver un error
      mockAxios.onGet('scientists').reply(500);
      
      // Espía en console.error para verificar que se llama
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      // Llama a la acción del store
      await store.fetchScientists();
      
      // Verifica que se haya llamado a console.error
      expect(consoleSpy).toHaveBeenCalled();
      
      // Verifica que el array de científicos esté vacío
      expect(store.scientists).toEqual([]);
      
      // Limpia el spy
      consoleSpy.mockRestore();
    });
  });

  describe('fetchScientistsByArea', () => {
    it('debe cargar científicos por área correctamente', async () => {
      const areaId = 1;
      const mockData = [
        { id: 1, name: 'Marie Curie', area: areaId },
        { id: 3, name: 'Rosalind Franklin', area: areaId }
      ];
      
      // Configura el mock para la ruta /scientists/area/:area
      mockAxios.onGet(`scientists/area/${areaId}`).reply(200, mockData);
      
      // Llama a la acción del store
      await store.fetchScientistsByArea(areaId);
      
      // Verifica que los datos se hayan cargado correctamente
      expect(store.scientistsByArea).toEqual(mockData);
    });

    it('debe manejar errores al cargar científicos por área', async () => {
      const areaId = 999; // Área inexistente
      
      // Configura el mock para devolver un error
      mockAxios.onGet(`scientists/area/${areaId}`).reply(404);
      
      // Espía en console.error para verificar que se llama
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      // Llama a la acción del store
      await store.fetchScientistsByArea(areaId);
      
      // Verifica que se haya llamado a console.error
      expect(consoleSpy).toHaveBeenCalled();
      
      // Verifica que el array de científicos por área esté vacío
      expect(store.scientistsByArea).toEqual([]);
      
      // Limpia el spy
      consoleSpy.mockRestore();
    });
  });

  describe('fetchScientist', () => {
    it('debe cargar un científico específico correctamente', async () => {
      const scientistId = 1;
      const mockData = { id: scientistId, name: 'Marie Curie', area: 1, bio: 'Pionera en radiactividad' };
      
      // Configura el mock para la ruta /scientists/:id
      mockAxios.onGet(`scientists/${scientistId}`).reply(200, mockData);
      
      // Llama a la acción del store
      await store.fetchScientist(scientistId);
      
      // Verifica que los datos se hayan cargado correctamente
      expect(store.scientist).toEqual(mockData);
    });

    it('debe manejar errores al cargar un científico específico', async () => {
      const scientistId = 999; // ID inexistente
      
      // Configura el mock para devolver un error
      mockAxios.onGet(`scientists/${scientistId}`).reply(404);
      
      // Espía en console.error para verificar que se llama
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      // Llama a la acción del store
      await store.fetchScientist(scientistId);
      
      // Verifica que se haya llamado a console.error
      expect(consoleSpy).toHaveBeenCalled();
      
      // Verifica que el objeto scientist esté vacío
      expect(store.scientist).toEqual({});
      
      // Limpia el spy
      consoleSpy.mockRestore();
    });
  });
});
