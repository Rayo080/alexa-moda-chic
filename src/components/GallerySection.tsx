import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Vestido elegante con accesorios", label: "Looks completos" },
  { src: gallery2, alt: "Interior de la boutique con vestidos", label: "Nuestra tienda" },
  { src: gallery3, alt: "Clienta feliz probándose un vestido", label: "Tú, radiante" },
  { src: gallery4, alt: "Detalle de bordado y calidad del tejido", label: "Calidad premium" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-background bg-linen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
            Para todas
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Moda real, para cuerpos reales
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-lg mx-auto">
            Variedad de tallas, estilos que enamoran y una calidad que se nota al primer toque. Sin compromisos.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-primary-foreground font-body font-medium text-sm bg-primary/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
