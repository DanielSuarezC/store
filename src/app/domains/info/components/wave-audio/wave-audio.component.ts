import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl = '';
  @ViewChild('wave') container!: ElementRef;

  ngAferViewInit(){
    WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple'
    });

    // wavesurfer.load('https://wavesurfer-js.org/example/media/demo.wav');
  }

}
