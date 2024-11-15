import { Button } from '@mui/material';
import React, { useRef } from 'react';
import Analytics from '../../assets/E02877824-GMP-Google-Analytics-Help-Center-Assets-Apr23-Graphic-1.1@300x.svg';
import Workflow from '../../assets/635bad3cee312a82a97a5437_clappia - workflows.png';
import Tracking from '../../assets/33-337115_conversion-tracking-hd-png-download.png';
import Team from '../../assets/teeam.avif';
import Dashboard from '../../assets/dashboard.png';
import report from '../../assets/report.jpg';
import PricingCards from '../../components/pricing/Pricing';
import AppFooter from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import {motion, useInView} from "framer-motion"
import Statistics from '../../components/stats/Stats';

const Landingpage = () => {
	const navigate = useNavigate();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.5,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<>
		<header className="bg-green-800 w-screen min-h-[95vh] md:min-h-[65vh] lg:min-h-[95vh] px-10 lg:px-20 py-5">
		  <nav className="flex items-center">
			<h1 className="text-lime-300 font-bold font-serrat">GadgetTrac</h1>
	  
			<Button
			  onClick={() => navigate("/login")}
			  variant="contained"
			  className="!ml-auto !bg-lime-400 !font-bold !text-green-800"
			>
			  Get Started
			</Button>
		  </nav>
	  
		  <div ref={ref} className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-24">
			<div className="order-2 md:order-1 flex flex-col justify-center text-4xl md:text-5xl font-bold font-serrat text-white">
			  <motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1, ease: "easeOut" }}
			  >
				Optimize Your Sales Process, With our Business Management tool
			  </motion.h1>
	  
			  <motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={isInView ? { opacity: 1, scale: 1 } : {}}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
			  >
				<Button
				  onClick={() => navigate("/login")}
				  variant="contained"
				  className="!mt-5 w-[150px] !bg-lime-400 !font-bold !text-green-800"
				>
				  Try for free
				</Button>
			  </motion.div>
			</div>
	  
			<motion.div
			  initial={{ opacity: 0, scale: 0.95 }}
			  animate={isInView ? { opacity: 1, scale: 1 } : {}}
			  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
			  className="order-1 md:order-2 w-full h-[400px] rounded-2xl bg-main bg-cover bg-no-repeat md:bg-cover"
			  loading="lazy"
			></motion.div>
		  </div>
		</header>
	  
		<section className="mt-12">
		  <div ref={ref} className="flex flex-col items-center">
			<motion.div
			  className="text-sm font-bold bg-lime-300 text-green-800 px-4 py-2 rounded-3xl"
			  initial={{ scale: 0.9, opacity: 0 }}
			  animate={isInView ? { scale: 1, opacity: 1 } : {}}
			  transition={{ duration: 0.6 }}
			>
			  WHY CHOOSE US
			</motion.div>
	  
			<motion.div
			  className="px-12"
			  initial={{ opacity: 0, y: 20 }}
			  animate={isInView ? { opacity: 1, y: 0 } : {}}
			  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
			>
			  <h1 className="text-2xl font-serrat font-bold mt-2">
				We provide a seamless experience by optimizing your sales process
			  </h1>
			</motion.div>
	  
			<motion.div
			  className="grid gap-4 mt-5 grid-cols-1 md:grid-cols-3"
			  variants={containerVariants}
			  initial="hidden"
			  animate={isInView ? "show" : "hidden"}
			>
			  {[
				{
				  title: "Real Time Analytics",
				  imgSrc: Analytics,
				  description:
					"Stay on top of your performance, make informed decisions faster",
				},
				{
				  title: "Automated Workflow",
				  imgSrc: Workflow,
				  description:
					"Stay on top of your performance, make informed decisions faster",
				},
				{
				  title: "Opportunity Tracking",
				  imgSrc: Tracking,
				  description:
					"Stay on top of your performance, make informed decisions faster",
				},
				{
				  title: "Team Collaboration",
				  imgSrc: Team,
				  description:
					"Stay on top of your performance, make informed decisions faster",
				},
				{
				  title: "Customizable Dashboard",
				  imgSrc: Dashboard,
				  description:
					"Stay on top of your performance, make informed decisions faster",
				},
				{
				  title: "Reporting",
				  imgSrc: report,
				  description:
					"Stay on top of your performance, make informed decisions faster",
				},
			  ].map((feature, index) => (
				<motion.div
				  key={index}
				  className="bg-slate-100 w-[300px] md:w-[350px] h-[250px] px-4 py-4 font-serrat"
				  variants={itemVariants}
				>
				  <h1 className="text-sm font-bold">{feature.title}</h1>
				  <h2 className="text-xs text-slate-500">{feature.description}</h2>
				  <img
					src={feature.imgSrc}
					alt={feature.title}
					className="w-[80%] h-auto"
					loading="lazy"
				  />
				</motion.div>
			  ))}
			</motion.div>
		  </div>
	  
		  <Statistics />
	  
		  <div className="mt-6 px-12 flex flex-col font-serrat h-[60vh] bg-green-800 justify-center items-center">
			<motion.h1
			  initial={{ opacity: 0, y: 20 }}
			  animate={{ opacity: 1, y: 0 }}
			  transition={{ duration: 1, ease: "easeOut" }}
			  className="text-4xl font-bold mb-8"
			>
			  <span className="text-lime-300">Discover </span>How Our CRM Can
			  Transform <span className="text-lime-300">Your Sales</span>
			</motion.h1>
	  
			<motion.div
			  initial={{ opacity: 0, scale: 0.9 }}
			  animate={{ opacity: 1, scale: 1 }}
			  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
			>
			  <Button
				onClick={() => navigate("/login")}
				variant="contained"
				className="!bg-lime-400 !font-bold !text-green-800"
			  >
				Try Demo for Free
			  </Button>
			</motion.div>
		  </div>
	  
		  <div className="mt-12 flex flex-col justify-center items-center px-12">
			<div className="text-sm font-bold bg-lime-300 text-green-800 px-4 py-2 rounded-3xl ">
			  PRICING
			</div>
	  
			<div className="px-12 ">
			  <h1 className="text-center text-2xl font-serrat font-bold mt-2">
				Affordable Pricing Plans
			  </h1>
			</div>
	  
			<PricingCards />
		  </div>
		</section>
	  
		<AppFooter />
	  </>
	  
	);
};

export default Landingpage;
