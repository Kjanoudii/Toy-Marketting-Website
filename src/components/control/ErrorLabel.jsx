import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

const ErrorLabel = ({ name, message, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { height: 0, opacity: 0 },
            visible: { height: "auto", opacity: 1 },
          }}
          className="mt-1 overflow-hidden"
        >
          <div
            className={`flex items-center text-red-400 text-sm space-x-1 pt-1`}
          >
            <ExclamationCircleIcon className="h-4 w-4" />
            <p role="alert" id={`${name}-error`}>
              {message}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorLabel;
