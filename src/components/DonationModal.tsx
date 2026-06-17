import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Heart } from "lucide-react";

/**
 * Premium Donation Modal Component
 *
 * Features:
 * - Display donation account details
 * - Paystack payment integration
 * - Copy-to-clipboard functionality
 * - Smooth animations
 * - Responsive design
 */

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Donation account details
  const accountDetails = {
    accountName: "Waste Wise Humanitarian Initiative Enugu",
    accountNumber1: "2048741114 (USD)",
    accountNumber2: "2048740997 (Naira)",
    bankName: "first Bank Nig. PLC",
    currency: "₦ / USD",
  };

  // Copy to clipboard handler
  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  // Handle Paystack payment
  const handlePaystackPayment = async () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;

    if (amount < 100) {
      alert("Minimum donation amount is ₦100");
      return;
    }

    setIsProcessing(true);

    // Simulate Paystack integration
    // In production, you would use the Paystack JavaScript SDK
    try {
      // This is a placeholder - replace with actual Paystack implementation
      console.log("Processing payment of ₦" + amount);

      // Example Paystack integration (requires Paystack SDK):
      // const response = await fetch('/api/paystack/initialize', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     amount: amount * 100, // Paystack uses kobo
      //     email: 'donor@example.com',
      //     metadata: { purpose: 'donation' }
      //   })
      // });

      // For now, show success message
      alert(
        `Thank you for your donation of ₦${amount}! Paystack integration coming soon.`,
      );
      onClose();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Modal animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={onClose}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
          />

          {/* Modal - centered container to handle viewport overflow */}
          <div className='fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none'>
            <motion.div
              variants={modalVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              onClick={(e) => e.stopPropagation()}
              className='pointer-events-auto w-full max-w-md max-h-[90vh] overflow-auto p-0'
            >
              <div className='bg-white rounded-2xl shadow-2xl overflow-hidden'>
                {/* Header */}
                <div className='bg-gradient-to-r from-primary to-secondary p-6 relative overflow-hidden'>
                  <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20' />
                  </div>
                  <div className='relative flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <Heart className='w-6 h-6 text-white fill-white' />
                      <h2 className='text-2xl font-display font-bold text-white'>
                        Support WasteZero
                      </h2>
                    </div>
                    <button
                      onClick={onClose}
                      className='p-2 hover:bg-white/20 rounded-lg transition-colors'
                    >
                      <X className='w-5 h-5 text-white' />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className='p-6 space-y-6'>
                  {/* Description */}
                  <p className='text-foreground/70 text-center'>
                    Your donation directly supports waste management initiatives
                    across Nigerian communities.
                  </p>

                  {/* Bank Transfer Section */}
                  <div className='bg-muted/30 rounded-xl p-4 space-y-3'>
                    <h3 className='font-display font-bold text-foreground'>
                      Bank Transfer
                    </h3>

                    {/* Account Details */}
                    <div className='space-y-2 text-sm'>
                      {[
                        {
                          label: "Account Name",
                          value: accountDetails.accountName,
                          key: "name",
                        },
                        {
                          label: "Account Number",
                          value: accountDetails.accountNumber1,
                          key: "number",
                        },
                        {
                          label: "Account Number",
                          value: accountDetails.accountNumber2,
                          key: "number",
                        },
                        {
                          label: "Bank",
                          value: accountDetails.bankName,
                          key: "bank",
                        },

                        {
                          label: "Currency",
                          value: accountDetails.currency,
                          key: "currency",
                        },
                      ].map((item) => (
                        <div
                          key={item.key}
                          className='flex items-center justify-between p-2 bg-white rounded-lg border border-border/40'
                        >
                          <div>
                            <p className='text-foreground/60 text-xs'>
                              {item.label}
                            </p>
                            <p className='font-semibold text-foreground'>
                              {item.value}
                            </p>
                          </div>
                          <button
                            onClick={() => handleCopy(item.value, item.key)}
                            className='p-2 hover:bg-muted rounded-lg transition-colors'
                          >
                            {copied === item.key ? (
                              <Check className='w-4 h-4 text-primary' />
                            ) : (
                              <Copy className='w-4 h-4 text-foreground/60' />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Note */}
                  <p className='text-xs text-foreground/60 text-center'>
                    All donations are secure and tax-deductible. Your support
                    makes a real difference.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
