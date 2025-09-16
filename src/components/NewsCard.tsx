import React from 'react';
import { Calendar, Tag } from 'lucide-react';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, excerpt, date, category }) => {
  return (
    <div className="news-card">
      <div className="news-header">
        <span className="news-category">
          <Tag size={14} />
          {category}
        </span>
      </div>
      
      <h3 className="news-title">{title}</h3>
      <p className="news-excerpt">{excerpt}</p>
      
      <div className="news-footer">
        <div className="news-date">
          <Calendar size={14} />
          {new Date(date).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;