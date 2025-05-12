
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-9xl font-bold text-navy mb-4">404</h1>
        <p className="text-2xl text-slate mb-8">Oops! This page has gone exploring</p>
        <p className="text-slate mb-8">
          The page you're looking for doesn't seem to exist. It might have been moved or deleted.
        </p>
        <Button asChild className="bg-navy hover:bg-navy/90 text-white">
          <Link to="/">
            <ArrowLeft className="mr-2" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
