import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Statistics = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div ref={ref} className='px-20 mt-8 font-serrat grid grid-cols-1 md:grid-cols-3'>
			{[
				{ value: "95%", description: "Client Satisfaction Rate, reflecting our commitment to exceeding expectations" },
				{ value: "20+", description: "A dedicated team of professionals, bringing skills & expertise in innovative solutions" },
				{ value: "3yrs+", description: "Building and Scaling SMEs, reflecting our commitment to exceeding expectations" }
			].map((stat, index) => (
				<motion.div
					key={index}
					className='flex flex-col gap-4 px-4 py-4'
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: index * 0.3 }}
				>
					<h1 className='text-4xl font-bold'>{stat.value}</h1>
					<h2 className='text-slate-500'>{stat.description}</h2>
				</motion.div>
			))}
		</div>
	);
};

export default Statistics;
