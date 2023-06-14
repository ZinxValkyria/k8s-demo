FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y sudo curl git-core gnupg locales nodejs zsh wget nano npm fonts-powerline && \
    locale-gen en_GB.UTF-8 && \
    adduser --quiet --disabled-password --shell /bin/zsh --home /home/dev --gecos "User" dev && \
    echo "dev:<a href="mailto://p@ssword1">p@ssword1</a>" | chpasswd && usermod -aG sudo dev
RUN curl -sS https://starship.rs/install.sh > ./installStarship.sh
RUN sh ./installStarship.sh --yes
RUN echo "eval '$(starship init zsh)'" >> ~/.zshrc
ENV TERM xterm
USER dev
CMD ["zsh"]