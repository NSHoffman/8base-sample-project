import React, { useEffect, useState } from 'react';
import { Loader } from '@8base/boost';
import { WebhooksAPI } from '../../shared/api/8base-workspace';

interface ProductThumbnailProps {
  image?: string | null;
  searchQuery: string;
}

const thumbnailStyle = { width: '5rem', height: '5rem' };

export const ProductThumbnail: React.FC<ProductThumbnailProps> = ({ image, searchQuery }) => {
  const [thumbnail, setThumbnail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (image) {
      setThumbnail(image);
      return;
    }

    const setDefaultThumbnail = async (query: string) => {
      setLoading(true);
      const defaultThumbnail = await WebhooksAPI.getProductImage(query);

      if (defaultThumbnail) {
        setThumbnail(defaultThumbnail);
      }
      setLoading(false);
    }

    setDefaultThumbnail(searchQuery);
  }, [searchQuery, image]);

  if (loading) {
    return <Loader />;
  }

  return <img src={thumbnail} alt="Not Available" style={thumbnailStyle} />
}
