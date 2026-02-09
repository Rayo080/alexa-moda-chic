import { motion } from "framer-motion";
import { Star, Heart, Rainbow } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 items-center text-center">
          {/* Google Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-7 h-7 fill-secondary text-secondary"
                />
              ))}
            </div>
            <p className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-2">
              4.9
            </p>
            <p className="text-primary-foreground/70 font-body text-base">
              en Google Reviews
            </p>
            <p className="text-primary-foreground/50 font-body text-sm mt-1">
              La opinión de quien más importa: tú
            </p>
          </motion.div>

          {/* LGBTQ+ Friendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Rainbow className="w-12 h-12 text-secondary mx-auto mb-3" />
            <p className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-2">
              Espacio seguro
            </p>
            <p className="text-primary-foreground/70 font-body text-base max-w-xs mx-auto">
              LGBTQ+ friendly. Aquí lo que importa es tu estilo, no las etiquetas. Todo el mundo es bienvenido. 🏳️‍🌈
            </p>
          </motion.div>

          {/* Alexandra */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Heart className="w-12 h-12 text-secondary mx-auto mb-3" />
            <p className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-2">
              Alexandra te asesora
            </p>
            <p className="text-primary-foreground/70 font-body text-base max-w-xs mx-auto">
              De tú a tú, con cariño y honestidad. Porque mereces alguien que te diga la verdad (y que te haga sentir increíble).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
