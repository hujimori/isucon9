wget https://github.com/tkuchiki/alp/releases/download/v1.0.3/alp_linux_amd64.zip
sudo apt install unzip
unzip alp_linux_amd64.zip
sudo mv alp /usr/local/bin/alp
rm alp_linux_amd64.zip
alp --version && echo "alp successfully installed"