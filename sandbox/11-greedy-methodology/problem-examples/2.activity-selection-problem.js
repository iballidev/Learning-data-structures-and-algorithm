
/**
 * 2. Activity Selection Problem:

Problem: Given a list of activities with their start and end times, select the maximum number of non-overlapping activities.
Greedy Choice: Always pick the activity that ends earliest and is compatible with the previously selected activity.
JavaScript Code: */

function maxActivities(activities) {
    activities.sort((a, b) => a.end - b.end);
    const selected = [activities[0]];
    let lastSelected = 0;
    for (let i = 1; i < activities.length; i++) {
      if (activities[i].start >= activities[lastSelected].end) {
        selected.push(activities[i]);
        lastSelected = i;
      }
    }
    return selected;
  }