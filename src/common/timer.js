
export function formatTimeAgo(timeDifference) {
    // 格式化时间差，返回一个表示时间差的友好字符串。
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (seconds < 60) {
      return seconds + '秒前';
    } else if (minutes < 60) {
      return minutes + '分钟前';
    } else if (hours < 24) {
      return hours + '小时前';
    } else {
      return days + '天前';
    }
  }