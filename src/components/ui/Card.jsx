import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', delay = 0, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`glass rounded-2xl p-6 glass-hover ${className}`}
      onClick={onClick}
      role={onClick ? "button" : "region"}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </motion.div>
  );
};

export default Card;
