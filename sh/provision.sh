apt-get update
apt-get -y install language-pack-en
apt-get -y install build-essential libssl-dev

chmod u+x /vagrant/sh/user-config.sh

su -c "/vagrant/sh/user-config.sh" vagrant

