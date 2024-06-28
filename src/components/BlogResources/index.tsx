import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import firstBlogDemoVideoImg from '../../../public/assets/firstBlogDemoVideo.png';
import secondBlogDemoVideoImg from '../../../public/assets/secondBlogDemoVideo.png';
import annualReportBookImg from '../../../public/assets/annualReportBook.png';
import createBusinessBookImg from '../../../public/assets/createBusinessBook.png';
import peopleBusinessImg from '../../../public/assets/peopleBusiness.png';

const BlogsResources: React.FC = () => {
  const resources = [
    {
      type: 'video',
      title: 'Top Ten Most Powerful Startup',
      duration: '2 Min',
      imageUrl: firstBlogDemoVideoImg,
      width: 378,
      height: 235,
    },
    {
      type: 'video',
      title: 'Top Ten Most Powerful Startup',
      duration: '2 Min',
      imageUrl: secondBlogDemoVideoImg,
      width: 378,
      height: 235,
    },
    {
      type: 'video',
      title: 'Top Ten Most Powerful Startup',
      duration: '2 Min',
      imageUrl: secondBlogDemoVideoImg,
      width: 378,
      height: 235,
    },
    {
      type: 'article',
      title: 'Top Ten Most Powerful Startup',
      description:
        'Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.',
      imageUrl: annualReportBookImg,
      width: 85,
      height: 79,
    },
    {
      type: 'article',
      title: 'Top Ten Most Powerful Startup',
      description:
        'Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.',
      imageUrl: createBusinessBookImg,
      width: 85,
      height: 79,
    },
    {
      type: 'article',
      title: 'Top Ten Most Powerful Startup',
      description:
        'Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.',
      imageUrl: peopleBusinessImg,
      width: 85,
      height: 79,
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
                <Image
                  src={resource.imageUrl}
                  alt={resource.title}
                  className={styles.image}
                  width={resource.width}
                  height={resource.height}
                />
                {/* <div className={styles.overlay}>
                  <div className={styles.playButton}>▶</div>
                  <p className={styles.duration}>{resource.duration}</p>
                </div> */}
              </>
            ) : (
              <>
                <Image
                  src={resource.imageUrl}
                  alt={resource.title}
                  className={styles.image}
                  width={resource.width}
                  height={resource.height}
                />
                <div className={styles.articleContent}>
                  <h2 className={styles.articleTitle}>{resource.title}</h2>
                  <p className={styles.articleDescription}>
                    {resource.description}
                  </p>
                </div>
              </>
            )}
            {/* <p className={styles.resourceTitle}>{resource.title}</p> */}
          </div>
        ))}
      </div>
      <div className={styles.moreResources}>
        <a href='#' className={styles.moreResourcesLink}>
          See More Blogs & Resources →
        </a>
      </div>
    </div>
  );
};

export default BlogsResources;
