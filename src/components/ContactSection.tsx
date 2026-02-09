import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
            Contacto
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            ¿Hablamos?
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-md mx-auto">
            Estamos deseando conocerte. Escríbenos, llámanos o pásate por la tienda. ¡Te esperamos!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body font-semibold text-foreground">Dirección</p>
                <p className="text-muted-foreground font-body">
                  C. de la Marquesa Viuda de Aldama, 40
                  <br />
                  Alcobendas, Madrid
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body font-semibold text-foreground">Horario</p>
                <p className="text-muted-foreground font-body">
                  Lunes a Sábado: 10:00 – 14:00 / 17:00 – 20:30
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body font-semibold text-foreground">Teléfono</p>
                <p className="text-muted-foreground font-body">664 12 31 53</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/34664123153"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full px-8 py-5 bg-[#25D366] text-[#fff] font-body font-bold text-lg rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-lg shadow-[#25D366]/25"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chatea con nosotras
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-border/50 aspect-square"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.2!2d-3.6422!3d40.5478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDMyJzUyLjEiTiAzwrAzOCczMi4wIlc!5e0!3m2!1ses!2ses!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Alexa Moda Boutique en Alcobendas"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
