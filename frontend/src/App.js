import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CssBaseline,
  IconButton,
  InputAdornment,
  CircularProgress,
  Modal,
} from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const Hero = styled(Box)(({ theme }) => ({
  backgroundImage:
    'url(https://onaircode.com/wp-content/uploads/2019/08/strip-hero-template.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: '100px 20px',
  [theme.breakpoints.down('sm')]: {
    padding: '50px 20px',
  },
}));

const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  textAlign: 'center',
  padding: '20px 0',
  marginTop: '50px',
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

function App() {
  const [url, setUrl] = useState('');
  const [processing, setProcessing] = useState(false);
  const [logs, setLogs] = useState([]);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    setLogs([]);
    simulateProcess();
  };

  const simulateProcess = async () => {
    const processSteps = [
      'ウェブサイトにアクセスしています...',
      'ドメイン情報を取得しています...',
      'ページ速度を分析しています...',
      'SEOをチェックしています...',
      'モバイルフレンドリネスを評価しています...',
      'バックリンクを分析しています...',
      'セキュリティ検査を実施しています...',
      'コンテンツ品質を評価しています...',
      '競合他社を調査しています...',
      '最終レポートを生成しています...',
    ];

    for (let i = 0; i < processSteps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, getRandomTime(3000, 5000)));
      setLogs((prevLogs) => [...prevLogs, processSteps[i]]);
    }

    setProcessing(false);
    setEmailModalOpen(true);
  };

  const getRandomTime = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailModalOpen(false);
    toast.success('分析結果は数分以内に送信されます！', {
      position: 'top-center',
      autoClose: 5000,
    });
    setEmail('');
    setUrl('');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />

      <AppBar position="sticky" sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar>
          <Box
            component="img"
            src="https://doodleipsum.com/700x700/outline?i=56b36d0e6e08c0ec632880afd2273386"
            alt="logo"
            sx={{ height: 40, marginRight: 2 }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: '#000',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            ウェブサイト解析ツール
          </Typography>
        </Toolbar>
      </AppBar>

      <Hero>
        <Typography
          variant="h2"
          gutterBottom
          className="animate__animated animate__fadeIn animate__slower"
          sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}
        >
          ウェブサイト解析ツール
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          className="animate__animated animate__fadeInUp"
          sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
        >
          ウェブサイトの価値を最大限に引き出しましょう
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mx: 'auto',
            width: { xs: '90%', sm: '50%' },
          }}
        >
          <TextField
            placeholder="ウェブサイトのURLを入力"
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            fullWidth
            sx={{ bgcolor: '#fff', borderRadius: 5 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    color="secondary"
                    sx={{
                      bgcolor: 'secondary.main',
                      color: '#fff',
                      '&:hover': { bgcolor: 'secondary.dark' },
                    }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
      </Hero>

      {processing && (
        <Container
          maxWidth="sm"
          className="animate__animated animate__fadeIn"
          sx={{
            mt: -4,
            p: 4,
            backgroundColor: '#ffffff',
            borderRadius: 2,
            boxShadow: 3,
            textAlign: 'center',
          }}
        >
          <CircularProgress color="primary" />
          <Box mt={2}>
            {logs.map((log, index) => (
              <Typography
                key={index}
                className="animate__animated animate__fadeInUp"
                variant="body2"
                sx={{ fontSize: '0.9rem', backgroundColor: '#e0e0e0', p: 1, borderRadius: 1, mb: 1 }}
              >
                {log}
              </Typography>
            ))}
          </Box>
        </Container>
      )}

      {!processing && logs.length > 0 && (
        <Container
          maxWidth="sm"
          className="animate__animated animate__fadeIn"
          sx={{
            mt: -4,
            p: 4,
            backgroundColor: '#ffffff',
            borderRadius: 2,
            boxShadow: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            分析が完了しました！
          </Typography>
        </Container>
      )}

      <Modal open={emailModalOpen} onClose={() => setEmailModalOpen(false)}>
        <Box
          className="animate__animated animate__fadeInDown animate__slow"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            width: '100%',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            結果を受け取るメールアドレスを入力してください
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            この結果は5分間のみ利用可能です。
          </Typography>
          <Box component="form" onSubmit={handleEmailSubmit}>
            <TextField
              fullWidth
              type="email"
              placeholder="ウェブサイトのURLを入力"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ bgcolor: '#fff', borderRadius: 5 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      type='submit'
                      color='secondary'
                      sx={{ bgcolor: 'secondary.main', color: '#fff', '&:hover': { bgcolor: 'secondary.dark' } }}
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              送信
            </Button>
          </Box>
        </Box>
      </Modal>

      {!processing && (<Container maxWidth="md" sx={{ mt: 4, mb: 4 }}><Grid container spacing={4}><Grid item xs={12} sm={4}><Card className="animate__animated animate__fadeInUp" sx={{textAlign: 'center', py: 4, transition: 'transform 0.3s','&:hover': { transform: 'scale(1.05)' },}}><SearchIcon color="primary" sx={{ fontSize: 50, mb: 2 }} /><CardContent><Typography variant="h6" gutterBottom>サイトの価値を評価</Typography><Typography variant="body2">ウェブサイトの潜在的な価値を見つけましょう</Typography></CardContent></Card></Grid><Grid item xs={12} sm={4}><Card className="animate__animated animate__fadeInUp" sx={{textAlign: 'center', py: 4, transition: 'transform 0.3s','&:hover': { transform: 'scale(1.05)' },}}><TrendingUpIcon color="primary" sx={{ fontSize: 50, mb: 2 }} /><CardContent><Typography variant="h6" gutterBottom>SEOを改善</Typography><Typography variant="body2">サイトの検索エンジン最適化を向上させるヒント</Typography></CardContent></Card></Grid><Grid item xs={12} sm={4}><Card className="animate__animated animate__fadeInUp" sx={{textAlign: 'center', py: 4, transition: 'transform 0.3s','&:hover': { transform: 'scale(1.05)' },}}><LightbulbIcon color="primary" sx={{ fontSize: 50, mb: 2 }} /><CardContent><Typography variant="h6" gutterBottom>新しいアイデア</Typography><Typography variant="body2">コンテンツと機能のアイデアを提案します</Typography></CardContent></Card></Grid></Grid></Container>)}

      <Footer>
        <Typography variant="body2">
          © 2024 ウェブサイト解析ツール. All rights reserved.
        </Typography>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
