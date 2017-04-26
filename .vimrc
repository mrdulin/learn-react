" 配色
" colorscheme candy
" 显示行号
set number
" 行号宽度
set hlsearch
" 增量式搜索
set incsearch
" 语法高亮
syntax on
"在windows版本中vim的退格键模式默认与vi兼容，与我们的使用习惯不太符合，下边这条可以改过来 
set backspace=indent,eol,start 

set autoindent
set smartindent

" 制表符占2个空格
set tabstop=2
set smarttab
set shiftwidth=2
set softtabstop=2
set showmatch
" 显示标尺
set ruler
" 突出显示当前行
set cursorline
set foldenable
set encoding=utf-8
set backspace=2
set ls=2
set showcmd
set textwidth=140
set colorcolumn=+1

set nocompatible              " be iMproved, required
filetype on

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'https://github.com/kien/ctrlp.vim'
Plugin 'https://github.com/vim-airline/vim-airline'
Plugin 'https://github.com/scrooloose/nerdtree'
Plugin 'https://github.com/Xuyuanp/nerdtree-git-plugin' 
Plugin 'https://github.com/vim-scripts/taglist.vim'
Plugin 'https://github.com/Valloric/YouCompleteMe'
Plugin 'https://github.com/tpope/vim-fugitive' 
Plugin 'https://github.com/pangloss/vim-javascript'
Plugin 'https://github.com/mxw/vim-jsx'
Plugin 'https://github.com/mattn/emmet-vim'
Plugin 'https://github.com/airblade/vim-gitgutter'
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line

"""""" NERDTREE CONFIG 
let NERDChristmasTree=0

" NERDTree的宽度
let NERDTreeWinSize=35
" 切换NERDTree 显示/隐藏 control + n
map <C-n> :NERDTreeToggle<CR>

" ctrlp ignore
let g:ctrlp_user_command = ['.git/', 'git --git-dir=%s/.git ls-files -oc --exclude-standard']
set wildignore+=*/tmp/*,*.so,*.swp,*.zip,*.png,*.jpg,*.jpeg,*.gif " MacOSX/Linux

let g:jsx_ext_required = 0
let g:ctrlp_working_path_mode = 'ra'
let g:ctrlp_dont_split = 'nerdtree'
