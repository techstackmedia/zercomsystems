import React from 'react';
import styles from './index.module.css';

const BlogsResources: React.FC = () => {
  const resources = [
    {
      type: 'video',
      title: 'Top Ten Most Powerful Startup',
      duration: '2 Min',
      imageUrl: '/images/video1.png',
    },
    {
      type: 'video',
      title: 'Top Ten Most Powerful Startup',
      duration: '2 Min',
      imageUrl: '/images/video2.png',
    },
    {
      type: 'video',
      title: 'Top Ten Most Powerful Startup',
      duration: '2 Min',
      imageUrl: '/images/video3.png',
    },
    {
      type: 'article',
      title: 'Top Ten Most Powerful Startup',
      description: 'Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.',
      imageUrl: '/images/article1.png',
    },
    {
      type: 'article',
      title: 'Top Ten Most Powerful Startup',
      description: 'Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.',
      imageUrl: '/images/article2.png',
    },
    {
      type: 'article',
      title: 'Top Ten Most Powerful Startup',
      description: 'Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.',
      imageUrl: '/images/article3.png',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blogs & Resources</h1>
      <div className={styles.resources}>
        {resources.map((resource, index) => (
          <div key={index} className={styles.resourceCard}>
            {resource.type === 'video' ? (
              <>
                <img src={resource.imageUrl} alt={resource.title} className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.playButton}>▶</div>
                  <p className={styles.duration}>{resource.duration}</p>
                </div>
              </>
            ) : (
              <>
                <img src={resource.imageUrl} alt={resource.title} className={styles.image} />
                <div className={styles.articleContent}>
                  <h2 className={styles.articleTitle}>{resource.title}</h2>
                  <p className={styles.articleDescription}>{resource.description}</p>
                </div>
              </>
            )}
            <p className={styles.resourceTitle}>{resource.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.moreResources}>
        <a href="#" className={styles.moreResourcesLink}>See More Blogs & Resources →</a>
      </div>
    </div>
  );
};

export default BlogsResources;
