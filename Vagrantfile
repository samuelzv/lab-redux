Vagrant.configure(2) do |config|
  config.vm.box     = "ubuntu/trusty64"
  config.vm.hostname = 'web-dev'
  config.vm.provision "shell", path: "sh/provision.sh"
  config.vm.network "forwarded_port", guest:3000, host: 8080, id: "hapijs"

  config.vm.synced_folder "./", "/vagrant", disabled: true
  config.vm.synced_folder "www", "/vagrant/www"
  config.vm.synced_folder "sh", "/vagrant/sh"
end
