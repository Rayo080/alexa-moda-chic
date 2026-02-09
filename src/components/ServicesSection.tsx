import { motion } from "framer-motion";
import { Store, Truck, Scissors } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Ven a vernos",
    description: "Visita nuestra tienda en Alcobendas y déjate asesorar. Probarse un vestido en persona no tiene rival.",
    emoji: "👗",
  },
  {
    icon: Truck,
    title: "Te lo enviamos a casa",
    description: "¿No puedes acercarte? No pasa nada. Te lo enviamos con todo el cariño (y bien empaquetado).",
    emoji: "📦",
  },
  {
    icon: Scissors,
    title: "Lo ajustamos a tu medida",
    description: "Porque nadie es perfecto, pero tu vestido sí puede serlo. Arreglos incluidos para que quede de cine.",
    emoji: "✂️",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background bg-linen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
            Nuestros servicios
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Todo lo que necesitas
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-border/50 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title} {service.emoji}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
