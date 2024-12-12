// Convert number to Chinese RMB characters
export function convertToChineseRMB(num: number): string {
  const digits = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const units = ['', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿'];
  const decimal = ['角', '分'];

  if (num === 0) return '零元整';

  // Split number into integer and decimal parts
  const [integer, decimal_part = ''] = num.toFixed(2).toString().split('.');
  
  // Convert integer part
  let result = '';
  let hasZero = false;
  
  for (let i = 0; i < integer.length; i++) {
    const digit = parseInt(integer[i]);
    const unit = units[integer.length - 1 - i];
    
    if (digit === 0) {
      hasZero = true;
      if (unit === '万' || unit === '亿') {
        result += unit;
        hasZero = false;
      }
    } else {
      if (hasZero) {
        result += '零';
        hasZero = false;
      }
      result += digits[digit] + unit;
    }
  }
  
  result += '元';
  
  // Convert decimal part
  if (decimal_part === '00') {
    result += '整';
  } else {
    for (let i = 0; i < 2; i++) {
      const digit = parseInt(decimal_part[i]);
      if (digit !== 0) {
        result += digits[digit] + decimal[i];
      }
    }
  }
  
  return result;
}

// Format number input
export function formatNumber(value: string): string {
  // Remove non-digit characters except decimal point
  value = value.replace(/[^\d.]/g, '');
  
  // Ensure only one decimal point
  const parts = value.split('.');
  if (parts.length > 2) {
    value = parts[0] + '.' + parts.slice(1).join('');
  }
  
  // Limit decimal places to 2
  if (parts[1]?.length > 2) {
    value = parts[0] + '.' + parts[1].slice(0, 2);
  }
  
  return value;
}