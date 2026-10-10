import { BUSINESS } from '@/data/business';

export default function GoogleMapEmbed() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg border border-navy-100">
      <div className="relative pb-[75%] h-0">
        <iframe
          src={BUSINESS.mapsEmbed}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Google Maps location of Indy Car Racing Mold Removal Experts"
        />
      </div>
    </div>
  );
}
