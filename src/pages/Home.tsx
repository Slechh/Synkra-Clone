import { Container } from "../components/Conatiner";
import { TextHighlight } from "../components/Highlight";
import { Icon } from "../components/Icon";
import { SectionTitle } from "../components/SectionTitle";
import { motion } from "framer-motion";

export function HomePage() {
  return (
    <section className="pt-16">
      <Container>
        <div className="grid grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <SectionTitle
              iconId="sparkle-icon"
              label="INTRODUCING THE OPS ARCHITECT FRAMEWORK"
            >
              Your Ops Brain for{" "}
              <TextHighlight italic>Enterprise</TextHighlight> SaaS Teams.
            </SectionTitle>
            <p className="text-brown text-xl">
              Synkra watches events across your stack, catches the work that
              falls between tools, and runs it automatically without a full-time
              ops engineer to babysit it.
            </p>
            <div className="flex gap-4 pt-3">
              <button
                type="button"
                className="flex gap-2 items-center px-5 py-4 text-white bg-dark-blue rounded-lg"
              >
                <span>Get early access</span>
                <Icon id="exit-icon" className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="border border-gray rounded-lg px-5"
              >
                Watch <span className="italic font-bold">Synkra</span> in action
              </button>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            src="/images/house.png"
            alt="house"
            className="w-120 h-125 mx-auto"
          />
        </div>
      </Container>
    </section>
  );
}
