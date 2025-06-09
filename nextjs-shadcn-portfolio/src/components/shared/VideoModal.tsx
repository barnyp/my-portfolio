import React from 'react';
import {
  Dialog,
  DialogContent,
  // DialogHeader, // Not used in this simplified version
  // DialogTitle, // Not used
  DialogTrigger, // To be used by the triggering button from parent
  // DialogClose // Implicitly handled by shadcn's 'x' button in DialogContent
} from "@/components/ui/dialog"; // Updated path

interface VideoModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void; // Control open state from parent
  videoSrc: string;
  trigger?: React.ReactNode; // Renamed from triggerButton for clarity, optional
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onOpenChange, videoSrc, trigger }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[800px] p-0 bg-transparent border-0 shadow-none"> {/* Custom styling for video */}
        {/* DialogHeader and DialogTitle removed for cleaner video display */}
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg" // Added rounded-lg
            src={videoSrc}
            title="Video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* The Dialog component from shadcn/ui automatically adds a close button (X) */}
        {/* If a custom DialogClose was needed: <DialogClose asChild><button>Close</button></DialogClose> */}
      </DialogContent>
    </Dialog>
  );
};
export default VideoModal;
