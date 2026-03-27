import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLanguage } from '@/contexts/LanguageContext';
import PageTransition from '@/components/PageTransition';
import { useSubmitApplication } from '@workspace/api-client-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';

const applySchema = z.object({
  name: z.string().min(2, "Name is required"),
  age: z.coerce.number().min(16, "Must be at least 16").max(100),
  height: z.string().min(1, "Height is required"),
  weight: z.string().min(1, "Weight is required"),
  goal: z.string().min(1, "Please select a goal"),
  experienceLevel: z.string().min(1, "Please select experience level"),
  whatsapp: z.string().min(8, "Valid WhatsApp number is required"),
});

type ApplyFormValues = z.infer<typeof applySchema>;

export default function Apply() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const mutation = useSubmitApplication({
    mutation: {
      onSuccess: () => {
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      onError: (error) => {
        toast({
          title: "Error submitting application",
          description: "Please try again later or contact via WhatsApp.",
          variant: "destructive"
        });
        console.error("Application error:", error);
      }
    }
  });

  const { register, handleSubmit, formState: { errors } } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
  });

  const onSubmit = (data: ApplyFormValues) => {
    mutation.mutate({ data });
  };

  if (isSuccess) {
    return (
      <PageTransition>
        <div className="min-h-[70vh] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-card border border-primary/30 p-10 rounded-3xl text-center box-glow-gold"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">{t.apply.form.successTitle}</h2>
            <p className="text-gray-300 mb-8">{t.apply.form.successMsg}</p>
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full py-4 rounded-xl bg-primary text-black font-bold hover:bg-yellow-400 transition-colors"
            >
              Return Home
            </button>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {t.apply.title}
          </h1>
          <p className="text-muted-foreground">
            {t.apply.subtitle}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-white/5 rounded-3xl p-6 md:p-10 shadow-xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.apply.form.name}</label>
                <input 
                  {...register("name")}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.apply.form.whatsapp}</label>
                <input 
                  {...register("whatsapp")}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="+20 100 000 0000"
                />
                {errors.whatsapp && <p className="text-red-400 text-xs mt-1">{errors.whatsapp.message}</p>}
              </div>

              {/* Age */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.apply.form.age}</label>
                <input 
                  type="number"
                  {...register("age")}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="25"
                />
                {errors.age && <p className="text-red-400 text-xs mt-1">{errors.age.message}</p>}
              </div>

              {/* Height & Weight */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">{t.apply.form.height}</label>
                  <input 
                    {...register("height")}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="180"
                  />
                  {errors.height && <p className="text-red-400 text-xs mt-1">{errors.height.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">{t.apply.form.weight}</label>
                  <input 
                    {...register("weight")}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="80"
                  />
                  {errors.weight && <p className="text-red-400 text-xs mt-1">{errors.weight.message}</p>}
                </div>
              </div>
            </div>

            {/* Goal */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">{t.apply.form.goal}</label>
              <select 
                {...register("goal")}
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
              >
                <option value="">Select a goal...</option>
                <option value="Fat Loss">{t.apply.goals.fatLoss}</option>
                <option value="Muscle Building">{t.apply.goals.muscle}</option>
                <option value="Recomposition">{t.apply.goals.recomp}</option>
                <option value="Strength">{t.apply.goals.strength}</option>
              </select>
              {errors.goal && <p className="text-red-400 text-xs mt-1">{errors.goal.message}</p>}
            </div>

            {/* Experience Level */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">{t.apply.form.experience}</label>
              <select 
                {...register("experienceLevel")}
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
              >
                <option value="">Select experience level...</option>
                <option value="Beginner">{t.apply.levels.beginner}</option>
                <option value="Intermediate">{t.apply.levels.intermediate}</option>
                <option value="Advanced">{t.apply.levels.advanced}</option>
              </select>
              {errors.experienceLevel && <p className="text-red-400 text-xs mt-1">{errors.experienceLevel.message}</p>}
            </div>

            <button 
              type="submit"
              disabled={mutation.isPending}
              className="w-full py-4 mt-8 rounded-xl bg-gradient-to-r from-primary to-yellow-500 text-black font-bold text-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {mutation.isPending ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> {t.apply.form.submitting}</>
              ) : (
                t.apply.form.submit
              )}
            </button>

          </form>
        </motion.div>
      </div>
    </PageTransition>
  );
}
