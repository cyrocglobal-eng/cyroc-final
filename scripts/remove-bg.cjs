const fs = require('fs');
const { PNG } = require('pngjs');

const input = 'public\\final-no-bg-clean.png';
const output = 'public\\final-no-bg-clean-2.png';

fs.createReadStream(input)
  .pipe(new PNG())
  .on('parsed', function() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        const r = this.data[idx];
        const g = this.data[idx+1];
        const b = this.data[idx+2];

        // Define near-black threshold
        const threshold = 30;
        if (r < threshold && g < threshold && b < threshold) {
          // Make pixel fully transparent
          this.data[idx+3] = 0;
        }
      }
    }

    this.pack().pipe(fs.createWriteStream(output)).on('finish', () => {
      console.log('Wrote', output);
    });
  });
