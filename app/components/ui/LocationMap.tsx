"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type LocationMapProps = {
  center: [number, number];
  zoom?: number;
  markers?: {
    position: [number, number];
    label: string;
    isProject?: boolean;
  }[];
  className?: string;
};

export default function LocationMap({
  center,
  zoom = 12,
  markers = [],
  className = "",
}: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  /* ── Initialize map ── */
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center,
      zoom,
      zoomControl: false,
      attributionControl: true,
      scrollWheelZoom: false,
    });

    /* Warm-toned tile layer to match the site aesthetic */
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 19,
      },
    ).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    markersLayerRef.current = L.layerGroup().addTo(map);
    mapInstanceRef.current = map;

    /* Fix tile rendering after container becomes visible */
    setTimeout(() => map.invalidateSize(), 200);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Update center + zoom when props change ── */
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo(center, zoom, {
      duration: 1.2,
      easeLinearity: 0.25,
    });
  }, [center, zoom]);

  /* ── Update markers when props change ── */
  useEffect(() => {
    if (!markersLayerRef.current) return;
    markersLayerRef.current.clearLayers();

    markers.forEach((m) => {
      const icon = m.isProject
        ? L.divIcon({
            className: "project-marker",
            html: `<div style="
              width: 20px; height: 20px;
              background: #5f845e;
              border: 3px solid #fff;
              border-radius: 50%;
              box-shadow: 0 2px 8px rgba(131,38,38,0.5);
            "></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          })
        : L.divIcon({
            className: "location-marker",
            html: `<div style="
              width: 14px; height: 14px;
              background: #5f845e;
              border: 2px solid #fff;
              border-radius: 50%;
              box-shadow: 0 2px 6px rgba(131,38,38,0.4);
            "></div>`,
            iconSize: [14, 14],
            iconAnchor: [7, 7],
          });

      L.marker(m.position, { icon })
        .addTo(markersLayerRef.current!)
        .bindTooltip(m.label, {
          permanent: false,
          direction: "top",
          offset: [0, -10],
          className: "map-tooltip",
        });
    });
  }, [markers]);

  return (
    <>
      <style>{`
        .map-tooltip {
          background: #fefafa;
          color: #2a0c0c;
          border: 1px solid #dfcaca;
          border-radius: 4px;
          padding: 6px 12px;
          font-family: var(--font-label), 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(131,38,38,0.12);
        }
        .map-tooltip::before {
          border-top-color: #dfcaca !important;
        }
        .leaflet-control-zoom a {
          background: #fefafa !important;
          color: #832626 !important;
          border-color: #dfcaca !important;
        }
        .leaflet-control-zoom a:hover {
          background: #f5eaea !important;
        }
      `}</style>
      <div ref={mapRef} className={`w-full h-full ${className}`} />
    </>
  );
}
