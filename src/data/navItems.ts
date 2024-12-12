import { Banknote, Gauge, Calculator } from 'lucide-react';

export const navItems = [
  {
    title: '人民币大写转换',
    description: '快速将数字金额转换为人民币大写格式',
    icon: Banknote,
    url: 'https://rmbconverter.watchcat.cn/',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    title: '压力单位换算',
    description: '各种压力单位之间的转换计算',
    icon: Gauge,
    url: 'https://yali.watchcat.cn/',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: '三角函数计算',
    description: '三角函数值的计算与转换',
    icon: Calculator,
    url: 'https://trig.watchcat.cn/',
    color: 'from-purple-500 to-pink-600'
  }
];