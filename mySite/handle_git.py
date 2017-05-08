import subprocess
import os


def handle_git(file_url):
    file_parted = file_url.split('/',10)
    file_name = file_parted[-1]
    os.chmod("./file_checking.sh", 0754)
    output = subprocess.check_output(['./file_checking.sh', str(file_url), str(file_name)])
    print(output)


handle_git('https://github.com/maciejstanek/resistor_calculator/archive/master.tar.gz')
