"use client";

import { useState } from "react";
import Image from "next/image";

export interface PreCargaImagenProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  circle?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const CargarImagen = ({
  src,
  alt,
  width,
  height,
  priority = false,
  circle = false,
  className = "",
  style,
}: PreCargaImagenProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`cargar-imagen ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ...style,
      }}>
      {/* Pulso visible mientras la imagen no cargó: circulo si es cuadrada, rectangulo si no */}
      {!loaded && (
        <div
          className={`cargar-imagen__placeholder ${
            circle ? "cargar-imagen__placeholder--circle" : ""
          }`}
        />
      )}

      {/* Imagen con transición de opacidad */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? undefined : "eager"}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`cargar-imagen__img ${loaded ? "cargar-imagen__img--loaded" : ""}`}
      />
    </div>
  );
};
