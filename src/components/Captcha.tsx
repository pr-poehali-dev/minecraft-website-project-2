import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CaptchaProps {
  onVerify: (success: boolean) => void;
}

const Captcha = ({ onVerify }: CaptchaProps) => {
  const [question, setQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setQuestion({ num1, num2, answer: num1 + num2 });
    setUserAnswer('');
    setError(false);
  };

  const handleSubmit = () => {
    if (parseInt(userAnswer) === question.answer) {
      onVerify(true);
      setError(false);
    } else {
      setError(true);
      onVerify(false);
      setTimeout(() => {
        generateQuestion();
      }, 1000);
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto border-2 border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon name="Shield" className="text-primary" size={24} />
          <CardTitle>Проверка на человека</CardTitle>
        </div>
        <CardDescription>Реши простой пример</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-foreground">
            {question.num1} + {question.num2} = ?
          </div>
        </div>
        
        <div className="flex gap-2">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            className={`flex-1 px-4 py-2 rounded-md border-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary ${
              error ? 'border-red-500' : 'border-input'
            }`}
            placeholder="Твой ответ"
          />
          <Button onClick={handleSubmit} className="gap-2">
            <Icon name="Check" size={16} />
            Проверить
          </Button>
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-500 text-sm">
            <Icon name="AlertCircle" size={16} />
            <span>Неверный ответ! Попробуй еще раз</span>
          </div>
        )}

        <Button 
          variant="ghost" 
          size="sm" 
          onClick={generateQuestion}
          className="w-full gap-2 text-muted-foreground"
        >
          <Icon name="RefreshCw" size={14} />
          Обновить пример
        </Button>
      </CardContent>
    </Card>
  );
};

export default Captcha;
