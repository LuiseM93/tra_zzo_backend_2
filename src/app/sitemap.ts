import { MetadataRoute } from 'next'
import { oficios } from '@/lib/data/oficios'
import { tareas } from '@/lib/data/tareas'
import { recursos } from '@/lib/data/recursos'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trazzoapp.online'
  
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/auth`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  const oficioRoutes: MetadataRoute.Sitemap = oficios.map((oficio) => ({
    url: `${baseUrl}/cotizador-para-${oficio.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const tareaRoutes: MetadataRoute.Sitemap = tareas.map((tarea) => ({
    url: `${baseUrl}/como-cotizar-${tarea.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const recursoRoutes: MetadataRoute.Sitemap = recursos.map((recurso) => ({
    url: `${baseUrl}/recursos/${recurso.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...oficioRoutes, ...tareaRoutes, ...recursoRoutes]
}
