/** Return a Promise that resolves after the next event loop. */
export const nextTick = (): Promise<void> => {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve());
  });
};

/**
 * Render a canvas using thumbhash data
 */
export function getCanvas(
	width: number,
	height: number,
	pixels: ArrayLike<number>
): HTMLCanvasElement | undefined {

	const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
	if (!ctx) return;

	canvas.width = width;
	canvas.height = height;

	const imageData = ctx.createImageData(width, height);
	imageData.data.set(pixels);
	ctx.putImageData(imageData, 0, 0);

  return canvas;
}