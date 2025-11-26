import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Student-Job-Tracker',
    desc: 'A full-stack web application to help students track their job applications efficiently. Built with React on the frontend, Node.js + Express on the backend, and MongoDB Atlas for persistent data storage.',
    ss: '/mamo.png',
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'YOLOv8'],
    live: 'https://student-job-tracker-git-main-pratham3shrauts-projects.vercel.app/',
    code: 'https://github.com/Pratham3shRaut/Student-job-Tracker'
  },
  {
  title: 'Virtual-Mouse',
  desc: 'A computer-vision-based virtual mouse that tracks hand movements to perform cursor actions in real time..                                                                        ',
  ss: '/virtualmounse.png',
  tech: ['Python', 'OpenCv', 'MediaPipe.'],
  live: '#',
  code: 'https://github.com/Pratham3shRaut/Virtual-Mouse-using-OpenCV-main'
  },
  {
    title: 'Register-Login',
    desc: 'This project is a simple login system built using Node.js and MySQL. It allows users to register and log in to the system. The project demonstrates the integration of a backend server with a MySQL database for user authentication',
    ss: '/ISL.png',
    tech: ['Node', 'MySQL', 'React', 'Flask'],
    live: '#',
    code: 'https://github.com/Pratham3shRaut/Register-Login'
  },
  {
  title: '💼 Portfolio Website',
  desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
  ss: '/portfolio.jpg',
  tech: ['React', 'Framer Motion', 'Tailwind CSS'],
  live: '#',
  code: '#'
  },
  {
    title: 'Movie web page',
    desc: 'created a dynamic movie webpage that uses the TMDb API to fetch real-time movie data, with features like search and category browsing. Built with HTML, CSS, and JavaScript, it offers a clean, responsive, and user-friendly experience',
    ss: '/moviewebpage.png',
    tech: ['IMDB API', 'HTML', 'CSS', 'JS'],
    live: 'https://movie-app-two-brown.vercel.app/',
    code: 'https://github.com/Pratham3shRaut/movie-app'
  },
  
  // {
  //   title: '🧬 Breast Cancer Prediction',
  //   desc: 'ML pipeline using SVC, Random Forest, and XGBoost with SMOTE for imbalanced dataset handling and model optimization.',
  //   ss: '/breastpred.jpg',
  //   tech: ['scikit-learn', 'XGBoost', 'Pandas'],
  //   live: '#',
  //   code: 'https://github.com/kunjdesai/BreastCancerPrediction'
  // }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
