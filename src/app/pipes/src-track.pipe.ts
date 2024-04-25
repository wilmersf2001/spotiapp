import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'srcTrack',
  standalone: true,
})
export class SrcTrackPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    const uri = value.replace('spotify:track:', '');
    const url = `https://open.spotify.com/embed/track/${uri}?utm_source=generator&theme=0`;

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
