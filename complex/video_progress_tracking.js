// Example videos
let videos = [
  { id: 1, title: 'Lecture 1', duration: 300, watched: 0, completed: false }, // 300s = 5min
  { id: 2, title: 'Lecture 2', duration: 200, watched: 0, completed: false }, // 200s = ~3.3min
  { id: 3, title: 'Lecture 3', duration: 400, watched: 0, completed: false }, // 400s = ~6.7min
];

// Function: update progress for a video
function updateProgress(videoId, secondsWatched) {
  let video = videos.find((v) => v.id === videoId);

  if (!video) return;

  // Add watched time but cap at duration
  video.watched = Math.min(video.duration, video.watched + secondsWatched);

  // Calculate percentage
  let percentage = (video.watched / video.duration) * 100;

  if (percentage >= 100) {
    video.completed = true;
    console.log(`✅ ${video.title} completed!`);
  } else {
    console.log(`${video.title} progress: ${percentage.toFixed(2)}%`);
  }

  checkCourseCompletion();
}

// Function: calculate overall course progress
function getCourseProgress() {
  let totalPercentage = videos.reduce(
    (sum, v) => sum + (v.watched / v.duration) * 100,
    0
  );
  return totalPercentage / videos.length;
}

// Function: check if course is fully complete
function checkCourseCompletion() {
  let courseProgress = getCourseProgress();
  console.log(`📊 Overall Course Progress: ${courseProgress.toFixed(2)}%`);
  if (videos.every((v) => v.completed)) {
    console.log('🎉 Course Completed! Certificate Earned!');
  }
}

// --- Example flow ---
// User watches 200s of Lecture 1
updateProgress(1, 200);
// User finishes remaining 100s of Lecture 1
updateProgress(1, 100);
// User finishes all 200s of Lecture 2
updateProgress(2, 200);
